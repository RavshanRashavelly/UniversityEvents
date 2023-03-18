import React, {Fragment, useState} from 'react';

import {Panel, PanelHeader, Search, PanelHeaderBack, Group, Snackbar,Caption, Div,CardGrid, TabbarItem, Tabbar, Separator, Epic, ContentCard,CellButton} from '@vkontakte/vkui';

const Events = (props) => {
    const [searchResult, hasSearchResult] = useState(false);
    const [addedToApp, isAddToApp] = useState(false);

    const addToApp = async function(e){
        console.log(e.currentTarget.id);
        await props.sendData(props.endpointAdd, {
            app_id: e.currentTarget.id,
            user: props.user.id,
            role: 'student'
        });
        isAddToApp(true);
        setTimeout(()=>isAddToApp(false), 2000);

    }
        
        const search = async function(value){
            const result = await props.getData(`${props.endpointSearch}?name=${value}`);
            console.log(result);
            if(result) hasSearchResult(result)
        }

        const searchHandler = async function(e){
            console.log('blur');
            if(e.target.value){
                search(e.target.value);
            }
            else hasSearchResult(false);
        }    

        
    
}