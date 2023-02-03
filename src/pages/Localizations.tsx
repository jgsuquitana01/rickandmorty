import { fetchRickAndMorty, rickAndMortyLocalizations } from '../services/rickAndMorty';
import useSWR from 'swr';
import React from 'react';
import AntNuevo from "../components/AndNuevo";
import styles from './character.module.css';

interface LocalizationsData {
    results: Array<{
        id: number;
        name: number;
        dimension:string
    }>;
}

export const Localizations: React.FC = () => {
    const { data, error } = useSWR<LocalizationsData>(rickAndMortyLocalizations, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Localizations</h1>

            <div className={styles.container}>
                {data?.results.map((locations:any)=> (
                    <AntNuevo  key={locations.id} name={locations.name} dimension={locations.dimension}></AntNuevo>
                ))}
            </div>


        </>
    );
};

