import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      
      rentals = rentals.filter(
          (rental) => rental.title.toUpperCase().includes(query.toUpperCase()) || rental.type.toUpperCase().includes(query.toUpperCase()) || rental.city.toUpperCase().includes(query.toUpperCase())
          );
    }

    return rentals;
  }
}