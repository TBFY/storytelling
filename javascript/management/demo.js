var demoData = [
    {time: "2019-01-01", 'sepal length': "5.1", 'sepal width': "3.5", 'petal length': "1.4", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-02", 'sepal length': "4.9", 'sepal width': "3", 'petal length': "1.4", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-03", 'sepal length': "4.7", 'sepal width': "3.2", 'petal length': "1.3", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-04", 'sepal length': "4.6", 'sepal width': "3.1", 'petal length': "1.5", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-05", 'sepal length': "5", 'sepal width': "3.6", 'petal length': "1.4", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-06", 'sepal length': "5.4", 'sepal width': "3.9", 'petal length': "1.7", 'petal width': "0.4", classification: "Iris-setosa"},
    {time: "2019-01-07", 'sepal length': "4.6", 'sepal width': "3.4", 'petal length': "1.4", 'petal width': "0.3", classification: "Iris-setosa"},
    {time: "2019-01-08", 'sepal length': "5", 'sepal width': "3.4", 'petal length': "1.5", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-09", 'sepal length': "4.4", 'sepal width': "2.9", 'petal length': "1.4", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-10", 'sepal length': "4.9", 'sepal width': "3.1", 'petal length': "1.5", 'petal width': "0.1", classification: "Iris-setosa"},
    {time: "2019-01-11", 'sepal length': "5.4", 'sepal width': "3.7", 'petal length': "1.5", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-12", 'sepal length': "4.8", 'sepal width': "3.4", 'petal length': "1.6", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-13", 'sepal length': "4.8", 'sepal width': "3", 'petal length': "1.4", 'petal width': "0.1", classification: "Iris-setosa"},
    {time: "2019-01-14", 'sepal length': "4.3", 'sepal width': "3", 'petal length': "1.1", 'petal width': "0.1", classification: "Iris-setosa"},
    {time: "2019-01-15", 'sepal length': "5.8", 'sepal width': "4", 'petal length': "1.2", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-16", 'sepal length': "5.7", 'sepal width': "4.4", 'petal length': "1.5", 'petal width': "0.4", classification: "Iris-setosa"},
    {time: "2019-01-17", 'sepal length': "5.4", 'sepal width': "3.9", 'petal length': "1.3", 'petal width': "0.4", classification: "Iris-setosa"},
    {time: "2019-01-18", 'sepal length': "5.1", 'sepal width': "3.5", 'petal length': "1.4", 'petal width': "0.3", classification: "Iris-setosa"},
    {time: "2019-01-19", 'sepal length': "5.7", 'sepal width': "3.8", 'petal length': "1.7", 'petal width': "0.3", classification: "Iris-setosa"},
    {time: "2019-01-20", 'sepal length': "5.1", 'sepal width': "3.8", 'petal length': "1.5", 'petal width': "0.3", classification: "Iris-setosa"},
    {time: "2019-01-21", 'sepal length': "5.4", 'sepal width': "3.4", 'petal length': "1.7", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-22", 'sepal length': "5.1", 'sepal width': "3.7", 'petal length': "1.5", 'petal width': "0.4", classification: "Iris-setosa"},
    {time: "2019-01-23", 'sepal length': "4.6", 'sepal width': "3.6", 'petal length': "1", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-24", 'sepal length': "5.1", 'sepal width': "3.3", 'petal length': "1.7", 'petal width': "0.5", classification: "Iris-setosa"},
    {time: "2019-01-25", 'sepal length': "4.8", 'sepal width': "3.4", 'petal length': "1.9", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-26", 'sepal length': "5", 'sepal width': "3", 'petal length': "1.6", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-27", 'sepal length': "5", 'sepal width': "3.4", 'petal length': "1.6", 'petal width': "0.4", classification: "Iris-setosa"},
    {time: "2019-01-28", 'sepal length': "5.2", 'sepal width': "3.5", 'petal length': "1.5", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-29", 'sepal length': "5.2", 'sepal width': "3.4", 'petal length': "1.4", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-30", 'sepal length': "4.7", 'sepal width': "3.2", 'petal length': "1.6", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-01-31", 'sepal length': "4.8", 'sepal width': "3.1", 'petal length': "1.6", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-01", 'sepal length': "5.4", 'sepal width': "3.4", 'petal length': "1.5", 'petal width': "0.4", classification: "Iris-setosa"},
    {time: "2019-02-02", 'sepal length': "5.2", 'sepal width': "4.1", 'petal length': "1.5", 'petal width': "0.1", classification: "Iris-setosa"},
    {time: "2019-02-03", 'sepal length': "5.5", 'sepal width': "4.2", 'petal length': "1.4", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-04", 'sepal length': "4.9", 'sepal width': "3.1", 'petal length': "1.5", 'petal width': "0.1", classification: "Iris-setosa"},
    {time: "2019-02-05", 'sepal length': "5", 'sepal width': "3.2", 'petal length': "1.2", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-06", 'sepal length': "5.5", 'sepal width': "3.5", 'petal length': "1.3", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-07", 'sepal length': "4.9", 'sepal width': "3.1", 'petal length': "1.5", 'petal width': "0.1", classification: "Iris-setosa"},
    {time: "2019-02-08", 'sepal length': "4.4", 'sepal width': "3", 'petal length': "1.3", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-09", 'sepal length': "5.1", 'sepal width': "3.4", 'petal length': "1.5", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-10", 'sepal length': "5", 'sepal width': "3.5", 'petal length': "1.3", 'petal width': "0.3", classification: "Iris-setosa"},
    {time: "2019-02-11", 'sepal length': "4.5", 'sepal width': "2.3", 'petal length': "1.3", 'petal width': "0.3", classification: "Iris-setosa"},
    {time: "2019-02-12", 'sepal length': "4.4", 'sepal width': "3.2", 'petal length': "1.3", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-13", 'sepal length': "5", 'sepal width': "3.5", 'petal length': "1.6", 'petal width': "0.6", classification: "Iris-setosa"},
    {time: "2019-02-14", 'sepal length': "5.1", 'sepal width': "3.8", 'petal length': "1.9", 'petal width': "0.4", classification: "Iris-setosa"},
    {time: "2019-02-15", 'sepal length': "4.8", 'sepal width': "3", 'petal length': "1.4", 'petal width': "0.3", classification: "Iris-setosa"},
    {time: "2019-02-16", 'sepal length': "5.1", 'sepal width': "3.8", 'petal length': "1.6", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-17", 'sepal length': "4.6", 'sepal width': "3.2", 'petal length': "1.4", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-18", 'sepal length': "5.3", 'sepal width': "3.7", 'petal length': "1.5", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-19", 'sepal length': "5", 'sepal width': "3.3", 'petal length': "1.4", 'petal width': "0.2", classification: "Iris-setosa"},
    {time: "2019-02-20", 'sepal length': "7", 'sepal width': "3.2", 'petal length': "4.7", 'petal width': "1.4", classification: "Iris-versicolor"},
    {time: "2019-02-21", 'sepal length': "6.4", 'sepal width': "3.2", 'petal length': "4.5", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-02-22", 'sepal length': "6.9", 'sepal width': "3.1", 'petal length': "4.9", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-02-23", 'sepal length': "5.5", 'sepal width': "2.3", 'petal length': "4", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-02-24", 'sepal length': "6.5", 'sepal width': "2.8", 'petal length': "4.6", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-02-25", 'sepal length': "5.7", 'sepal width': "2.8", 'petal length': "4.5", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-02-26", 'sepal length': "6.3", 'sepal width': "3.3", 'petal length': "4.7", 'petal width': "1.6", classification: "Iris-versicolor"},
    {time: "2019-02-27", 'sepal length': "4.9", 'sepal width': "2.4", 'petal length': "3.3", 'petal width': "1", classification: "Iris-versicolor"},
    {time: "2019-02-28", 'sepal length': "6.6", 'sepal width': "2.9", 'petal length': "4.6", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-03-01", 'sepal length': "5.2", 'sepal width': "2.7", 'petal length': "3.9", 'petal width': "1.4", classification: "Iris-versicolor"},
    {time: "2019-03-02", 'sepal length': "5", 'sepal width': "2", 'petal length': "3.5", 'petal width': "1", classification: "Iris-versicolor"},
    {time: "2019-03-03", 'sepal length': "5.9", 'sepal width': "3", 'petal length': "4.2", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-03-04", 'sepal length': "6", 'sepal width': "2.2", 'petal length': "4", 'petal width': "1", classification: "Iris-versicolor"},
    {time: "2019-03-05", 'sepal length': "6.1", 'sepal width': "2.9", 'petal length': "4.7", 'petal width': "1.4", classification: "Iris-versicolor"},
    {time: "2019-03-06", 'sepal length': "5.6", 'sepal width': "2.9", 'petal length': "3.6", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-03-07", 'sepal length': "6.7", 'sepal width': "3.1", 'petal length': "4.4", 'petal width': "1.4", classification: "Iris-versicolor"},
    {time: "2019-03-08", 'sepal length': "5.6", 'sepal width': "3", 'petal length': "4.5", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-03-09", 'sepal length': "5.8", 'sepal width': "2.7", 'petal length': "4.1", 'petal width': "1", classification: "Iris-versicolor"},
    {time: "2019-03-10", 'sepal length': "6.2", 'sepal width': "2.2", 'petal length': "4.5", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-03-11", 'sepal length': "5.6", 'sepal width': "2.5", 'petal length': "3.9", 'petal width': "1.1", classification: "Iris-versicolor"},
    {time: "2019-03-12", 'sepal length': "5.9", 'sepal width': "3.2", 'petal length': "4.8", 'petal width': "1.8", classification: "Iris-versicolor"},
    {time: "2019-03-13", 'sepal length': "6.1", 'sepal width': "2.8", 'petal length': "4", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-03-14", 'sepal length': "6.3", 'sepal width': "2.5", 'petal length': "4.9", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-03-15", 'sepal length': "6.1", 'sepal width': "2.8", 'petal length': "4.7", 'petal width': "1.2", classification: "Iris-versicolor"},
    {time: "2019-03-16", 'sepal length': "6.4", 'sepal width': "2.9", 'petal length': "4.3", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-03-17", 'sepal length': "6.6", 'sepal width': "3", 'petal length': "4.4", 'petal width': "1.4", classification: "Iris-versicolor"},
    {time: "2019-03-18", 'sepal length': "6.8", 'sepal width': "2.8", 'petal length': "4.8", 'petal width': "1.4", classification: "Iris-versicolor"},
    {time: "2019-03-19", 'sepal length': "6.7", 'sepal width': "3", 'petal length': "5", 'petal width': "1.7", classification: "Iris-versicolor"},
    {time: "2019-03-20", 'sepal length': "6", 'sepal width': "2.9", 'petal length': "4.5", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-03-21", 'sepal length': "5.7", 'sepal width': "2.6", 'petal length': "3.5", 'petal width': "1", classification: "Iris-versicolor"},
    {time: "2019-03-22", 'sepal length': "5.5", 'sepal width': "2.4", 'petal length': "3.8", 'petal width': "1.1", classification: "Iris-versicolor"},
    {time: "2019-03-23", 'sepal length': "5.5", 'sepal width': "2.4", 'petal length': "3.7", 'petal width': "1", classification: "Iris-versicolor"},
    {time: "2019-03-24", 'sepal length': "5.8", 'sepal width': "2.7", 'petal length': "3.9", 'petal width': "1.2", classification: "Iris-versicolor"},
    {time: "2019-03-25", 'sepal length': "6", 'sepal width': "2.7", 'petal length': "5.1", 'petal width': "1.6", classification: "Iris-versicolor"},
    {time: "2019-03-26", 'sepal length': "5.4", 'sepal width': "3", 'petal length': "4.5", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-03-27", 'sepal length': "6", 'sepal width': "3.4", 'petal length': "4.5", 'petal width': "1.6", classification: "Iris-versicolor"},
    {time: "2019-03-28", 'sepal length': "6.7", 'sepal width': "3.1", 'petal length': "4.7", 'petal width': "1.5", classification: "Iris-versicolor"},
    {time: "2019-03-29", 'sepal length': "6.3", 'sepal width': "2.3", 'petal length': "4.4", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-03-30", 'sepal length': "5.6", 'sepal width': "3", 'petal length': "4.1", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-03-31", 'sepal length': "5.5", 'sepal width': "2.5", 'petal length': "4", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-04-01", 'sepal length': "5.5", 'sepal width': "2.6", 'petal length': "4.4", 'petal width': "1.2", classification: "Iris-versicolor"},
    {time: "2019-04-02", 'sepal length': "6.1", 'sepal width': "3", 'petal length': "4.6", 'petal width': "1.4", classification: "Iris-versicolor"},
    {time: "2019-04-03", 'sepal length': "5.8", 'sepal width': "2.6", 'petal length': "4", 'petal width': "1.2", classification: "Iris-versicolor"},
    {time: "2019-04-04", 'sepal length': "5", 'sepal width': "2.3", 'petal length': "3.3", 'petal width': "1", classification: "Iris-versicolor"},
    {time: "2019-04-05", 'sepal length': "5.6", 'sepal width': "2.7", 'petal length': "4.2", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-04-06", 'sepal length': "5.7", 'sepal width': "3", 'petal length': "4.2", 'petal width': "1.2", classification: "Iris-versicolor"},
    {time: "2019-04-07", 'sepal length': "5.7", 'sepal width': "2.9", 'petal length': "4.2", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-04-08", 'sepal length': "6.2", 'sepal width': "2.9", 'petal length': "4.3", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-04-09", 'sepal length': "5.1", 'sepal width': "2.5", 'petal length': "3", 'petal width': "1.1", classification: "Iris-versicolor"},
    {time: "2019-04-10", 'sepal length': "5.7", 'sepal width': "2.8", 'petal length': "4.1", 'petal width': "1.3", classification: "Iris-versicolor"},
    {time: "2019-04-11", 'sepal length': "6.3", 'sepal width': "3.3", 'petal length': "6", 'petal width': "2.5", classification: "Iris-virginica"},
    {time: "2019-04-12", 'sepal length': "5.8", 'sepal width': "2.7", 'petal length': "5.1", 'petal width': "1.9", classification: "Iris-virginica"},
    {time: "2019-04-13", 'sepal length': "7.1", 'sepal width': "3", 'petal length': "5.9", 'petal width': "2.1", classification: "Iris-virginica"},
    {time: "2019-04-14", 'sepal length': "6.3", 'sepal width': "2.9", 'petal length': "5.6", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-04-15", 'sepal length': "6.5", 'sepal width': "3", 'petal length': "5.8", 'petal width': "2.2", classification: "Iris-virginica"},
    {time: "2019-04-16", 'sepal length': "7.6", 'sepal width': "3", 'petal length': "6.6", 'petal width': "2.1", classification: "Iris-virginica"},
    {time: "2019-04-17", 'sepal length': "4.9", 'sepal width': "2.5", 'petal length': "4.5", 'petal width': "1.7", classification: "Iris-virginica"},
    {time: "2019-04-18", 'sepal length': "7.3", 'sepal width': "2.9", 'petal length': "6.3", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-04-19", 'sepal length': "6.7", 'sepal width': "2.5", 'petal length': "5.8", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-04-20", 'sepal length': "7.2", 'sepal width': "3.6", 'petal length': "6.1", 'petal width': "2.5", classification: "Iris-virginica"},
    {time: "2019-04-21", 'sepal length': "6.5", 'sepal width': "3.2", 'petal length': "5.1", 'petal width': "2", classification: "Iris-virginica"},
    {time: "2019-04-22", 'sepal length': "6.4", 'sepal width': "2.7", 'petal length': "5.3", 'petal width': "1.9", classification: "Iris-virginica"},
    {time: "2019-04-23", 'sepal length': "6.8", 'sepal width': "3", 'petal length': "5.5", 'petal width': "2.1", classification: "Iris-virginica"},
    {time: "2019-04-24", 'sepal length': "5.7", 'sepal width': "2.5", 'petal length': "5", 'petal width': "2", classification: "Iris-virginica"},
    {time: "2019-04-25", 'sepal length': "5.8", 'sepal width': "2.8", 'petal length': "5.1", 'petal width': "2.4", classification: "Iris-virginica"},
    {time: "2019-04-26", 'sepal length': "6.4", 'sepal width': "3.2", 'petal length': "5.3", 'petal width': "2.3", classification: "Iris-virginica"},
    {time: "2019-04-27", 'sepal length': "6.5", 'sepal width': "3", 'petal length': "5.5", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-04-28", 'sepal length': "7.7", 'sepal width': "3.8", 'petal length': "6.7", 'petal width': "2.2", classification: "Iris-virginica"},
    {time: "2019-04-29", 'sepal length': "7.7", 'sepal width': "2.6", 'petal length': "6.9", 'petal width': "2.3", classification: "Iris-virginica"},
    {time: "2019-04-30", 'sepal length': "6", 'sepal width': "2.2", 'petal length': "5", 'petal width': "1.5", classification: "Iris-virginica"},
    {time: "2019-05-01", 'sepal length': "6.9", 'sepal width': "3.2", 'petal length': "5.7", 'petal width': "2.3", classification: "Iris-virginica"},
    {time: "2019-05-02", 'sepal length': "5.6", 'sepal width': "2.8", 'petal length': "4.9", 'petal width': "2", classification: "Iris-virginica"},
    {time: "2019-05-03", 'sepal length': "7.7", 'sepal width': "2.8", 'petal length': "6.7", 'petal width': "2", classification: "Iris-virginica"},
    {time: "2019-05-04", 'sepal length': "6.3", 'sepal width': "2.7", 'petal length': "4.9", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-05-05", 'sepal length': "6.7", 'sepal width': "3.3", 'petal length': "5.7", 'petal width': "2.1", classification: "Iris-virginica"},
    {time: "2019-05-06", 'sepal length': "7.2", 'sepal width': "3.2", 'petal length': "6", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-05-07", 'sepal length': "6.2", 'sepal width': "2.8", 'petal length': "4.8", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-05-08", 'sepal length': "6.1", 'sepal width': "3", 'petal length': "4.9", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-05-09", 'sepal length': "6.4", 'sepal width': "2.8", 'petal length': "5.6", 'petal width': "2.1", classification: "Iris-virginica"},
    {time: "2019-05-10", 'sepal length': "7.2", 'sepal width': "3", 'petal length': "5.8", 'petal width': "1.6", classification: "Iris-virginica"},
    {time: "2019-05-11", 'sepal length': "7.4", 'sepal width': "2.8", 'petal length': "6.1", 'petal width': "1.9", classification: "Iris-virginica"},
    {time: "2019-05-12", 'sepal length': "7.9", 'sepal width': "3.8", 'petal length': "6.4", 'petal width': "2", classification: "Iris-virginica"},
    {time: "2019-05-13", 'sepal length': "6.4", 'sepal width': "2.8", 'petal length': "5.6", 'petal width': "2.2", classification: "Iris-virginica"},
    {time: "2019-05-14", 'sepal length': "6.3", 'sepal width': "2.8", 'petal length': "5.1", 'petal width': "1.5", classification: "Iris-virginica"},
    {time: "2019-05-15", 'sepal length': "6.1", 'sepal width': "2.6", 'petal length': "5.6", 'petal width': "1.4", classification: "Iris-virginica"},
    {time: "2019-05-16", 'sepal length': "7.7", 'sepal width': "3", 'petal length': "6.1", 'petal width': "2.3", classification: "Iris-virginica"},
    {time: "2019-05-17", 'sepal length': "6.3", 'sepal width': "3.4", 'petal length': "5.6", 'petal width': "2.4", classification: "Iris-virginica"},
    {time: "2019-05-18", 'sepal length': "6.4", 'sepal width': "3.1", 'petal length': "5.5", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-05-19", 'sepal length': "6", 'sepal width': "3", 'petal length': "4.8", 'petal width': "1.8", classification: "Iris-virginica"},
    {time: "2019-05-20", 'sepal length': "6.9", 'sepal width': "3.1", 'petal length': "5.4", 'petal width': "2.1", classification: "Iris-virginica"},
    {time: "2019-05-21", 'sepal length': "6.7", 'sepal width': "3.1", 'petal length': "5.6", 'petal width': "2.4", classification: "Iris-virginica"},
    {time: "2019-05-22", 'sepal length': "6.9", 'sepal width': "3.1", 'petal length': "5.1", 'petal width': "2.3", classification: "Iris-virginica"},
    {time: "2019-05-23", 'sepal length': "5.8", 'sepal width': "2.7", 'petal length': "5.1", 'petal width': "1.9", classification: "Iris-virginica"},
    {time: "2019-05-24", 'sepal length': "6.8", 'sepal width': "3.2", 'petal length': "5.9", 'petal width': "2.3", classification: "Iris-virginica"},
    {time: "2019-05-25", 'sepal length': "6.7", 'sepal width': "3.3", 'petal length': "5.7", 'petal width': "2.5", classification: "Iris-virginica"},
    {time: "2019-05-26", 'sepal length': "6.7", 'sepal width': "3", 'petal length': "5.2", 'petal width': "2.3", classification: "Iris-virginica"},
    {time: "2019-05-27", 'sepal length': "6.3", 'sepal width': "2.5", 'petal length': "5", 'petal width': "1.9", classification: "Iris-virginica"},
    {time: "2019-05-28", 'sepal length': "6.5", 'sepal width': "3", 'petal length': "5.2", 'petal width': "2", classification: "Iris-virginica"},
    {time: "2019-05-29", 'sepal length': "6.2", 'sepal width': "3.4", 'petal length': "5.4", 'petal width': "2.3", classification: "Iris-virginica"},
    {time: "2019-05-30", 'sepal length': "5.9", 'sepal width': "3", 'petal length': "5.1", 'petal width': "1.8", classification: "Iris-virginica"}
]