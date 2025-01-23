import { createContext, useEffect, useReducer, useState } from 'react'
import { redirectDocument } from 'react-router';
import { getFragment, getSubtitle, getTitle } from '../utils/functions';



export const DocumentContext  = createContext()


const defaultDocumentState = {
    titles: [],
    subtitles: [], 
    fragments: [],
}



export const DocumentProvider = ({ children }) => {
    const [titles, setTitles] = useState([]);
    const [subtitles, setSubtitles] = useState([]);
    const [fragments, setFragments] = useState([]);

    useEffect(() => {
        getTitle(titles, setTitles);
        getSubtitle(subtitles, setSubtitles);
        getFragment(fragments, setFragments);    
    }, []);
    
    const documentContext = {
        titles,
        subtitles,
        fragments
    }

    return <DocumentContext.Provider value={documentContext}>{children}</DocumentContext.Provider>
}



