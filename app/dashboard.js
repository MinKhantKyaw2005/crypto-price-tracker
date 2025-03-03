'use client'; // Mark this as a Client Component

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import styles from './dashboard.module.css';

// Fetch the latest prices of 5 cryptocurrencies
const fetchCoins = async () => {
  const { data } = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5'
  );
  return data;
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  // Debounce the search term
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedTerm(searchTerm), 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch the latest prices of 5 cryptocurrencies
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['crypto'],
    queryFn: fetchCoins,
    staleTime: 60000,
  });

  // Filter the cryptocurrencies based on the search term
  const filteredCoins = data?.filter(coin =>
    coin.name.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Crypto Tracker</h1>
        <button onClick={refetch} className={styles.refreshButton}>
          <ArrowPathIcon className={styles.refreshIcon} />
        </button>
      </div>

      <input
        type="text"
        placeholder="Search cryptocurrencies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
        </div>
      ) : isError ? (
        <div className={styles.error}>Error fetching data</div>
      ) : (
        <div className={styles.coinList}>
          {filteredCoins?.length > 0 ? (
            filteredCoins.map(coin => (
              <div key={coin.id} className={styles.coinCard}>
                <div className={styles.coinContainer}>
                   <img src={coin.image} className={styles.coinImage} alt={coin.name}></img>
                   <div className={styles.coinInfo}>
                      <h2 className={styles.coinName}>{coin.name}</h2>
                      <p className={styles.coinSymbol}>{coin.symbol.toUpperCase()}</p>
                   </div>
                   <p className={styles.priceTitle}>Price</p>
                </div>
                <div className={styles.coinPrice}>
                  <p className={styles.price}>${coin.current_price}</p>
                  <p className={`${styles.change} ${
                    coin.price_change_percentage_24h >= 0 ? styles.positive : styles.negative
                  }`}>
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              No matching cryptocurrencies found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}