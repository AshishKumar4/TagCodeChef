# -*- coding: utf-8 -*-
"""
Created on Sat Feb 23 02:18:17 2019

@author: Dell
"""

from flask import *
import numpy as np
import json
from sklearn.externals import joblib
import string 

import pandas as pd

app = Flask(__name__)
with app.app_context():
    
    @app.route('/makecalc', methods=['POST'])
    def makecalc():
        jsonfile = request.get_json(force=True)['name']
        print(jsonfile )
        """data = pd.read_json(json.dumps(jsonfile),orient='index')
        print(data)"""
        data=[1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,-1,0,1,-1,0,1,1,0,0,-1,-1,0,1,1,1]
        data=np.reshape(data,(1,-1))
        model= joblib.load('model.pkl')
        ypred=model.predict(data)
        x=ypred[0]
        return jsonify({'ans':x})       # This would give an error 'objects of type int64 are not json serializable', fix it.

    @app.route('/home', methods=['GET', 'POST'])
    def test():
        return render_template('index.html')
   
    if __name__ == '__main__':
        model= joblib.load('model.pkl')
        app.run(debug=True)
        print("loaded OK")