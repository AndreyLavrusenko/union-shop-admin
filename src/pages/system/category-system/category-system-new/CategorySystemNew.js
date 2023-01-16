import React, {useState} from 'react';

import './category-system-new.scss'
import {adminCreateCardAPI} from "../../../../api/api";

const CategorySystemNew = ({setUpdateState}) => {
    const [russianWord, setRussianWord] = useState("")
    const [englishWord, setEnglishWord] = useState("")

    const createNewCategory = async (e) => {
        e.preventDefault()

        if (russianWord !== "" && englishWord !== "") {
            await adminCreateCardAPI.createNewCategory({russianWord, englishWord})
            setUpdateState(prev => !prev)

            setEnglishWord("")
            setRussianWord("")
        }
    }

    return (
        <div className="system__new">
            <h2>Добавление новой категории</h2>
            
            <div className="system__new-wrapper">
                <div>
                    <label htmlFor="russian">Слово на русском (для пользователя)</label><br/>
                    <input autoComplete="off" onChange={e => setRussianWord(e.target.value)} value={russianWord} type="text" name="russian"/>
                </div>
                <div>
                    <label htmlFor="english">Слово на английском (для сервера)</label><br/>
                    <input autoComplete="off" onChange={e => setEnglishWord(e.target.value)} value={englishWord} type="text" name="english"/>
                </div>
            </div>

            <button onClick={createNewCategory}>Сохранить</button>
        </div>
    );
};

export default CategorySystemNew;