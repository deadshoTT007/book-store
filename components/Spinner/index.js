import React, { useState, useEffect } from 'react'
import { colors } from '@/utils/index'
import { makeStyles } from '@mui/styles/'

const Spinner = ({loaderStyle}) => {
    const useStyles = makeStyles(theme => ({
        loader: {
            border: `10px solid #f3f3f3`,
            'border-radius': '50%',
            'border-top': `10px solid ${colors.primary}`,
            // 'border-bottom': `16px solid ${colors.primary}`,
            width: '120px',
            display: 'flex',
            height: '120px',
            margin: 'auto',
            position: 'relative',
            top: '40%',

            // transform: 'translate(0,50%)',
            // marginTop: '25%',
            '-webkit-animation': '$spin 2s linear infinite',
            animation: '$spin 2s linear infinite',
            ...loaderStyle
        },

        ' @-webkit-keyframes spin': {
            '0%': { '-webkit-transform': 'rotate(0deg)' },
            '100%': { '-webkit-transform': 'rotate(360deg)' },
        },

        '@keyframes spin': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
        },
    }))

    const classes = useStyles()

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
            }}
        >
            <div className={classes.loader} />
        </div>
    )
}
export default Spinner;
