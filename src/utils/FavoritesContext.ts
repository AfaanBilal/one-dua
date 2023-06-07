/**
 * OneDua
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import React from 'react';

export const FavoritesContext = React.createContext<{ favorites: string[], setFavorites: React.Dispatch<React.SetStateAction<string[]>> }>({ favorites: [], setFavorites: () => { } });
