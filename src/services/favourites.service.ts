import { Quote } from '../data/quote.interface';

export class FavouritesService {
  private favourites: Quote[] = [];

  addToFavourites(quote: Quote) {
    this.favourites.push(quote);
    console.log(this.favourites);
  }

  removeFromFavourites(quote: Quote) {
    const quoteIndex = this.favourites.findIndex((currentQuote) => {
      return currentQuote.id == quote.id;
    });

    this.favourites.splice(quoteIndex, 1);
    console.log(this.favourites);
  }

  getFavourites() {
    return this.favourites.slice();
  }

  isQuoteFavourite(quote: Quote) {
    return this.favourites.find((currentQuote: Quote) => {
      return currentQuote.id == quote.id;
    });
  }
}
