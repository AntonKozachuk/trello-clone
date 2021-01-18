import React, { Children, createContext } from 'react';

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

interface AppStateContextProps {
    state: AppState
}

interface Task {
    id: string
    text: string
}

interface List {
    id: string
    text: string
    task: Task[]
}

export interface AppState {
    lists: List[]
}

const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'To do',
            tasks: [{id: 'c0', text: 'Generate app scaffold'}]
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [{id: 'c2', text: 'Learn TypeScript'}]
        },
        {
            id: '2',
            text: 'Done',
            tasks: [{id: 'c3', text: 'Begin to use static typing'}]
        }
    ]
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    return <AppStateContext.Provider value={{ state: appData}}>
        {children}
    </AppStateContext.Provider>
}