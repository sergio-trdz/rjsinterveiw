import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { Context } from '../../utils/Context.jsx';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

/**
 * TODO: handle on change
 * TODO: useState
 * TODO: Importar checkbox
 * TODO: import option, setoption => context
 */

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    display:'flex'
  }
});

const SimpleCard = ({ list = [] }) => {

  const classes = useStyles();

  const [ isReactSelected, setIsReactSelected ] = useState(false)
  const [ isJSSelected, setIsJSSelected ] = useState(false)

  const { option , setOption } = useContext(Context)

  useEffect(() => {
    list.forEach(item => {
      if (item?.topic === 'react') setIsReactSelected(true)
      if (item?.topic === 'javaScript') setIsJSSelected(true)
    })
  }, [])

  const checkReact = () => isReactSelected && {topic: 'react'}

  const checkJs = () => isJSSelected && {topic: 'javaScript'}

  const handleOnClick = () => {

    const rawdata = [checkReact(), checkJs()]

    const data = rawdata.filter(item => item !== false) 

    setOption(data)
  }

  const handleOnChangeReact = () => {
    if (isReactSelected) {
      setIsReactSelected(false)
    } else {
      setIsReactSelected(true)
    }
  }

  const handleOnChangeJS = () => {
    if (isJSSelected) {
      setIsJSSelected(false)
    } else {
      setIsJSSelected(true)
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.container}>
      <div>
            <label>
              JavaScript
            </label>
            <Checkbox
            color="primary"
            onChange={handleOnChangeJS}
            checked={isJSSelected}
            />
            <label>
              React
            </label>
            <Checkbox
            color="primary"
            onChange={handleOnChangeReact}
            checked={isReactSelected}
            />
      </div>

        <div className={classes.button}>
          <Button 
          // disabled={false}
          onClick={handleOnClick}>Guardar</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
