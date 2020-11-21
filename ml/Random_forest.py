import pandas as pd
import numpy as np
data = pd.read_csv("voice.csv")
labels = data['label']
del data['label']
from sklearn.model_selection import train_test_split
from Label_encoding import encode_labels




#Defining model and training on train values
labels = encode_labels(labels)
X_train,X_test,Y_train,Y_test = train_test_split(data,labels,test_size=0.15)
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier()
model.fit(X_train, Y_train)
pred = model.predict(X_test)
from sklearn.metrics import accuracy_score
