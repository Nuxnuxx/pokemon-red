/// <reference types="vite/client" />
type Pokemon = {
    name: string;
    image: string;
    atk: number;
    def: number;
    hp: number;
    speed: number;
    types: string[];
    lvl: number;
    special: string;
    moves: Move[];
    isEnnemy?: boolean;
};

type Type = {
    name: string;
    color: string;
    weakness: string[];
    imuunities: string[];
    category: string;
};

type Move = {
    name: string;
    type: string;
    atk: number;
    accuracy: number;
    pp: number;
};

type Battle = {
    playerTurn: boolean;
    battleLog?: string[];
    isOver?: boolean = false;
    winner?: Pokemon | null;
};
