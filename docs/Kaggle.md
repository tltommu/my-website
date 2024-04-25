**Competition: Regression with Abalone Dataset**

---

**Setting Environments**
```
# This Python 3 environment comes with many helpful analytics libraries installed
# It is defined by the kaggle/python Docker image: https://github.com/kaggle/docker-python
# For example, here's several helpful packages to load

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import matplotlib.pyplot as plt
import seaborn as sns
import lightgbm as lgb 
import xgboost as xgb
from sklearn.model_selection import train_test_split
# Input data files are available in the read-only "../input/" directory
# For example, running this (by clicking run or pressing Shift+Enter) will list all files under the input directory


import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

# You can write up to 20GB to the current directory (/kaggle/working/) that gets preserved as output when you create a version using "Save & Run All" 
# You can also write temporary files to /kaggle/temp/, but they won't be saved outside of the current session
Train_data=pd.read_csv("/kaggle/input/playground-series-s4e4/train.csv")
Test_data=pd.read_csv("/kaggle/input/playground-series-s4e4/test.csv")
Submission_Data=pd.read_csv("/kaggle/input/playground-series-s4e4/sample_submission.csv")
def rmsle(y_pred, label):
    y_true = label
    score = np.sqrt(np.mean(np.power(np.log1p(y_true) - np.log1p(y_pred), 2)))
    return 'rmsle', score, False
```

---

**Glimpse through data**

```
Train_data.hist()
```

Output

![img](\img\Kaggle-histogram.svg)

---

**Plotting relationship between each features**

```
sns.heatmap(pd.get_dummies(Train_data.drop("id",axis=1)).corr(),annot=True)
```

Output
![img](\img\kaggle-snsheatmap.svg)

---

Model Selection: [LGBM](https://lightgbm.readthedocs.io/en/stable/) and [XGBOOST](https://xgboost.readthedocs.io/en/stable/python/python_api.html)

CodeSamples
```

```
