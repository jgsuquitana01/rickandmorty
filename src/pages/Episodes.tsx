import { fetchRickAndMorty, rickAndMortyEpisodes } from '../services/rickAndMorty';
import useSWR from 'swr';
import React from 'react';
import AntEpisode from "../components/AndEpisode";
import styles from './character.module.css'


interface EpisodesData {
    results: Array<{
        id: number;
        name: string;
        episode:string;
    }>;
}

export const Episodes: React.FC = () => {
    const { data, error } = useSWR<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Episodes</h1>

            <div className={styles.container}>
                {data?.results.map((episodes:any) => (
                    <AntEpisode  key={episodes.id} name={episodes.name}  episode={episodes.episode}></AntEpisode>

                ))}
            </div>


        </>
    );
};
