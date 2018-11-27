import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Account } from './account';
import { Booking } from 'booking-lib/lib/state/booking';

export class SharedData implements InMemoryDbService {

    createDb() {
        const bookings: Booking[] = [
            {
                'id': 1,
                'name': 'Kate Wedding',
                'guests': 23,
                'guestrooms': 12,
                'nights': 2,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            },
            {
                'id': 2,
                'name': 'Amadeus Conference',
                'guests': 20,
                'guestrooms': 20,
                'nights': 1,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            },
            {
                'id': 3,
                'name': 'William',
                'guests': 3,
                'guestrooms': 1,
                'nights': 3,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            },
            {
                'id': 4,
                'name': 'David',
                'guests': 4,
                'guestrooms': 1,
                'nights': 2,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            },
            {
                'id': 5,
                'name': 'Lillian',
                'guests': 3,
                'guestrooms': 1,
                'nights': 4,
                'property': {
                    Id: '123',
                    Name: 'Independent Hotel'
                }
            }
        ];

        const accounts: Account[] = [
            {
                'id': 1,
                'name': 'Kate Wilson',
                'street': '123 Main St.',
                'city': 'Dover',
                'state': 'NH',
                'zipCode': '03220'
            },
            {
                'id': 2,
                'name': 'Amadeus Group',
                'street': '100 International Dr.',
                'city': 'Portsmouth',
                'state': 'NH',
                'zipCode': '03801'
            },
            {
                'id': 3,
                'name': 'William Jackson',
                'street': '456 Dead End Rd.',
                'city': 'Farmington',
                'state': 'NH',
                'zipCode': '03749'
            },
            {
                'id': 4,
                'name': 'David Hall',
                'street': '93 Stuart St.',
                'city': 'Rochester',
                'state': 'NH',
                'zipCode': '03823'
            },
            {
                'id': 5,
                'name': 'Lillian McBride',
                'street': '93 Windy Hill Lane',
                'city': 'Portsmouth',
                'state': 'NH',
                'zipCode': '03801'
            }
        ];
        return { bookings, accounts };
    }

    genId<T extends Booking | Account>(myTable: T[]): number {
        return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
    }
}
