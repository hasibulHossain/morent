import { Car } from "../../types";

export type ActionType = 'initial';
export type Action = {type: ActionType, payload?: any};

export type Dispatch = (action: Action) => void
export interface State {
    cars: Car[];
    recommendedCar: Car[];
    popularCar: Car[];
}

export type GlobalProviderProps = {children: React.ReactNode}

export interface Context {
    state: State; 
    dispatch: Dispatch;
}