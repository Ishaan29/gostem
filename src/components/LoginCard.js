import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const LoginCard = () => (
<card>
    <CardHeader title="Login"/>
    <br />
    <TextField
      hintText="user name "
      floatingLabelText="User Name "
    /><br />
     <TextField
      hintText="password"
      floatingLabelText="Password"
    /><br />

    <FlatButton label="submit" />
</card>
);

export default LoginCard;