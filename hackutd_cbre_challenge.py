# -*- coding: utf-8 -*-
"""HackUTD_CBRE_Challenge.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1iWJmy-d9XkRIKmoO7mcFn0I8_E6gh0mK
"""

import pandas as pd
import numpy as np

from google.colab import files
uploaded = files.upload()

file = 'Datafiniti_Hotel_Reviews_Jun19.csv'
reviews = pd.read_csv(file)

reviews.head()

# print out all the unique values

reviews.nunique()

# print out the null values in the reviews
reviews.isnull().sum()

# drop some labels which are not necessary for the analysis
reviews.drop(labels=['id', 'address', 'keys', 'latitude', 'longitude', 'postalCode', 'province', 'reviews.userCity', 'reviews.userProvince', 'sourceURLs', 'websites', 'reviews.dateAdded'], axis=1, inplace=True)

reviews.columns = ['dateAdded', 'dateUpdated', 'categories', 'primaryCategories', 'city', 'country', 'name', 'reviews_date', 'reviews_dateseen', 'reviews_rating', 'reviews_sourceURLs', 'reviews_text', 'reviews_title', 'reviews_username']

reviews.isnull().sum()

# Let's find out if the ratings are genuine
# What if one user is trying to give all the ratings
# How will the distribution look for bulk users
# How many users are bulk?

# total number of unique usernames for a rating
rating_perperson = reviews.reviews_username.value_counts()

# ratings
print("Total ratings: " + str(sum(rating_perperson)))
print("Total users: " + str(len(rating_perperson)))
print("Users giving bulk ratings (more than 5) : " + str(sum(rating_perperson >5)))
bulk = rating_perperson[rating_perperson >5]
bulk_rating = sum(bulk)
print ("Bulk ratings : " + str(bulk_rating))
print ("Populations of bulk ratings : " + str(bulk_rating*100/sum(rating_perperson)))
print ("Populations of bulk users : " + str(sum(rating_perperson >5)*100/len(rating_perperson)))
rating_perperson.value_counts().plot(kind='pie',figsize=(10,10), title='Ratings Per User')

# Commented out IPython magic to ensure Python compatibility.
# User rating distribution
from matplotlib import pyplot
# %matplotlib inline

star = reviews.reviews_rating.value_counts()
print("*** Rating distribution ***")
print(star)
star.sort_index(inplace=True)
star.plot(kind='bar',title='Hotel Reviews ratings',figsize=(6,6),style='Solarize_Light')

"""Calculate the NPS score of the promoters
https://www.qualtrics.com/experience-management/customer/net-promoter-score/

Promoters - 5
Passive - 4
Detractors - 1, 2, 3

NPS = (Promoters - Detractors)/Total ratings * 100
"""

NPS_score = round (100*((star.loc[5])-sum(star.loc[1:3]))/sum(star.loc[:]),2)
print (" NPS score of Hotels is : "  + str(NPS_score))

"""Less NPS score means most of the customers are not happy."""

# Let's pick a hotel and calculate the NPS score

hotel = reviews[reviews.name=='Hampton Inn San Diego/Mission Valley']
hotel.isnull().sum()

hotel_s = hotel.reviews_rating.value_counts()
hotel_s.sort_index(inplace=True)

Kindle_NPS_score = round (100*(hotel_s[5]-sum(hotel_s[1:3]))/sum(hotel_s),2)
print (" NPS score of Hotel is : "  + str(Kindle_NPS_score))
#better NPS than overall amazon
hotel_s.plot(kind='bar',title='Hampton Hotel ratings',figsize=(6,6),style='Solarize_Light2')

"""Let's predict the recommendations based on sentiments

- Remove Punctuations
- Remove Stopwords
- Use lemmatization to detect the contextual meaning of the word and it is better than rule based approach of stem
- Use TFIDF to find the importance of the words and it's better because it focuses on the frequency as well as the importance of the words which count vectorizer doesn't
- Create features
- Generate sentiment scores with RandomForestClassifier
"""

# Combine rating and titles to calculate the sentiments on them

comments = pd.concat([reviews['reviews_text']+". "+ reviews['reviews_title'],reviews['reviews_rating']],axis=1)
comments.columns=['text','rating']

comments.head()

"""Apply data cleaning to remove numbers and special chars"""

# Apply a first round of text cleaning techniques
import re
import string

def clean_text_round1(text):
    '''Make text lowercase then remove punctuation and remove words containing numbers.'''
    
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\w*\d\w*', '', text)
    text = text.lower()
    return text

round1 = lambda x: clean_text_round1(str(x))

reviews.reviews_title = reviews.reviews_title.apply(round1)
reviews.reviews_text = reviews.reviews_text.apply(round1)

import nltk
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('omw-1.4')

import string

from nltk import PorterStemmer
import re 

stopwords = nltk.corpus.stopwords.words('english')
ps = PorterStemmer()
wn = nltk.WordNetLemmatizer()


def clean_lemma (sent): 
    temp1 ="".join(x for x in sent if x not in string.punctuation)
    temp2 = re.split('\W+',temp1.lower())
    temp3 = [wn.lemmatize(x) for x in temp2 if x not in stopwords]
    return temp3

# create vectors from the text columns

from sklearn.feature_extraction.text import TfidfVectorizer

vectlemm = TfidfVectorizer(analyzer=clean_lemma)

textfeatures = vectlemm.fit_transform(comments['text'].values.astype('U'))
print("Lemmatized - " + str(len(vectlemm.get_feature_names())))

# print the vectors data
pd.DataFrame(textfeatures.toarray()).head(15)

# let's update the columns with real names
textmatrix = pd.DataFrame(textfeatures.toarray(),columns=vectlemm.vocabulary_)
textmatrix.head(5)

# sum of scores of different words
sum_scores = pd.DataFrame(textmatrix.sum(),columns=['sum_scores_TFIDF'])
sum_scores.head(10)

# print the most important words first
sum_scores.sort_values(by='sum_scores_TFIDF',ascending=True)[:5]

#high usage of words in reviews
sum_scores.sort_values(by='sum_scores_TFIDF',ascending=False)[:5]

# print the ratings data

pd.set_option('display.max_colwidth', 0)
comments.head()

# Feature 1 : Sentiment score
# calculate the compound score of the sentiment value with Vader library
from nltk.sentiment.vader import SentimentIntensityAnalyzer
nltk.download('vader_lexicon')
sid = SentimentIntensityAnalyzer()

def sentiment(x):
    score = sid.polarity_scores(x)
    return score['compound']
    
#sentiment(happy)
comments['sentiment']= comments['text'].apply(lambda x : sentiment(str(x)))

# Feature 2 : Length of string

comments['length'] = comments['text'].apply(lambda x : len(re.split('\W+',str(x))))

# Add a new column for the recommendation
comments['recommend'] = np.where(comments['rating'] > 3, 1, 0)

comments[comments['rating']==5].head(5)

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_recall_fscore_support as score
from sklearn.model_selection import train_test_split

# need to reset index of the comments column to match with textfeatures
new_sentiment = comments.sentiment.reset_index()['sentiment']
new_length = comments.length.reset_index()['length']

x_features = pd.concat([new_sentiment,new_length,
                        pd.DataFrame(textfeatures.toarray(),
                        columns=vectlemm.vocabulary_)],axis=1)
x_train, x_test, y_train, y_test = train_test_split(x_features, comments.recommend, test_size=0.2)

rf = RandomForestClassifier(n_jobs=-1,n_estimators=50,max_depth=90)
rfmodel=rf.fit(x_train,y_train)

y_pred = rfmodel.predict(x_test)
sorted(zip(rfmodel.feature_importances_,x_train.columns),reverse=True)[0:10]

precision, recall, fscore , support = score(y_test,y_pred,average='binary')
print('Precision: {} / Recall :{} / Accuracy {} '.format(round(precision,3),
                                                         round(recall,3),
                                                         round((y_pred==y_test).sum()/len(y_test),3)))

"""Listing out most important 200 words

"""

important_features = sorted(zip(rfmodel.feature_importances_,x_train.columns),reverse=True)
important_features

# find the negative and positive features
negative =[]
positive = []
for score, feat in important_features:
  if feat == 'sentiment' or feat == 'length':
    continue
  if sentiment(feat) >= 0.4:
    positive.append(feat)
  elif sentiment(feat) < 0.4:
    negative.append(feat)

print("Positive important words: " +str(positive))
print("Length of positive words: "+str(len(positive)))
print("Negative important words: " +str(negative))
print("Length of negative words: "+str(len(negative)))

"""Create a word cloud for these words"""

from wordcloud import WordCloud
wc = WordCloud(stopwords=stop_words, background_color="white", colormap="Dark2",
               max_font_size=150, random_state=42)



"""Let's get the most frequent words as well for the importance."""

from sklearn.feature_extraction.text import CountVectorizer

cv = CountVectorizer(stop_words='english')
data_cv = cv.fit_transform(reviews.reviews_text)
data_dtm = pd.DataFrame(data_cv.toarray(), columns=cv.get_feature_names())

data = data_dtm
summed = data.sum().reset_index()
summed.columns = ["word", "ct"]
top_dict = {}
for idx, row in summed.iterrows():
    top_dict[row.word] = row.ct

words = sorted(top_dict.items(), key=lambda x: x[1], reverse=True)

words[:200]

"""Remove irrelevant stop words from the comments"""

# Let's update our document-term matrix with the new list of stop words
from sklearn.feature_extraction import text 
from sklearn.feature_extraction.text import CountVectorizer

# Add new stop words
stop_words = text.ENGLISH_STOP_WORDS.union(["stay", "hotel", "room"]) #Remove most frequent and common words for hotel

# Recreate document-term matrix
cv = CountVectorizer(stop_words=stop_words)
data_cv = cv.fit_transform(data[["title", "text"]])
data_stop = pd.DataFrame(data_cv.toarray(), columns=cv.get_feature_names())
# data_stop.index = data_clean.index
data_cv

"""Generating word cloud for the most frequent words"""

from wordcloud import WordCloud
wc = WordCloud(stopwords=stop_words, background_color="white", colormap="Dark2",
               max_font_size=150, random_state=42)

# Reset the output dimensions
import matplotlib.pyplot as plt
plt.figure(figsize=(15, 20))
wc.generate(" ".join(negative[:200]))
plt.imshow(wc, interpolation="bilinear")
plt.title("Most common negative words", fontsize = 20)
plt.axis("off")

# Reset the output dimensions
import matplotlib.pyplot as plt
plt.figure(figsize=(15, 20))
wc.generate(" ".join(positive[:200]))
plt.imshow(wc, interpolation="bilinear")
plt.title("Most common positive words", fontsize = 20)
plt.axis("off")
