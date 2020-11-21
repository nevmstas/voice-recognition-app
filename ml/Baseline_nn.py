import tensorflow as tf
import pandas as pd
from Label_encoding import encode_labels
from sklearn.model_selection import train_test_split
import numpy as np


#Preparing data
data = pd.read_csv("voice.csv")
labels = data['label']
del data['label']
labels = encode_labels(labels)
X_train,X_test,Y_train,Y_test = train_test_split(data,labels,test_size=0.15)
print(X_train.shape)
print(X_test.shape)

#Building nn
model=tf.keras.models.Sequential()
model.add(tf.keras.layers.Input(shape=(len(data.columns))))
#model.add(tf.keras.layers.BatchNormalization())
model.add(tf.keras.layers.Dense(7000,activation='linear'))
#model.add(tf.keras.layers.Dropout(0.2))
model.add(tf.keras.layers.Dense(5000,activation='linear'))
model.add(tf.keras.layers.Dense(1,activation='sigmoid'))
model.compile(optimizer='Adam',loss=tf.keras.losses.BinaryCrossentropy(),metrics=[tf.keras.metrics.Accuracy()])

model.fit(X_train,Y_train,validation_data=(X_test,Y_test),callbacks=[tf.keras.callbacks.ModelCheckpoint(f'Pattern_recognition_nn.h5', monitor='val_loss', save_best_only=True,
        save_weights_only=False, verbose=1)],epochs=20)
