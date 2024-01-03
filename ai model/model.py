import numpy as np
import pandas as pd

df=pd.read_csv("career_pred.csv")

#
data = df.iloc[:,:-1].values
label = df.iloc[:,-1]

from sklearn.preprocessing import LabelEncoder, OneHotEncoder
labelencoder = LabelEncoder()

for i in range(14,38):
    data[:,i] = labelencoder.fit_transform(data[:,i])

#Normalizing the data
from sklearn.preprocessing import Normalizer
data1=data[:,:14]
normalized_data = Normalizer().fit_transform(data1)

data2=data[:,14:]
df1 = np.append(normalized_data,data2,axis=1)

df2=df.iloc[:,:-1]
dataset = pd.DataFrame(df1,columns=df2.columns)
# print(dataset)

label = df.iloc[:,-1]
original=label.unique() 
label=label.values
label2 = labelencoder.fit_transform(label)
y=pd.DataFrame(label2,columns=["Suggested Job Role"])
numeric=y["Suggested Job Role"].unique() 
Y = pd.DataFrame({'Suggested Job Role':original, 'Associated Number':numeric})
#print(Y)

X=dataset.copy()
from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=10)

# Run svm with default hyper parameters
# Default hyperparameter means C=1.0, kernel=rbf and gamma=auto among other parameters
# import SVC classifier
from sklearn.svm import SVC

# import metrics to compute accuracy
from sklearn.metrics import accuracy_score

# instantiate classifier with default hyperparameterso
svc=SVC() 

# fit classifier to training set
svc.fit(X_train,y_train)

# make predictions on test set
y_pred=svc.predict(X_test)


# compute and print accuracy score
print('Model accuracy score with default hyperparameters: {0:0.4f}'. format(accuracy_score(y_test, y_pred)*100))



############################################ pridiction code ###########################o#################


# Assume the user provides input in a structured format
user_input_list = [
  "15",
  "51",
  "15",
  "19",
  "51",
  "82",
  "86",
  "27",
  "80",
  "26",
  "62",
  "61",
  "10",
  "56",
  "no",
  "no",
  "no",
  "information security",
  "no",
  "data science",
  "medium",
  "no",
  "poor",
  "Computer Architecture",
  "system developer",
  "higher studies",
  "BPA",
  "yes",
  "no",
  "Biographies",
  "work",
  "no",
  "stubborn",
  "Management",
  "work",
  "hard worker",
  "yes",
  "yes"
]
