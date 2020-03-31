import Card from './Card';

enum Deadlocks {
  None,
  Primary,
  Secondary,
}

namespace Deadlocks {

  export const onPrimaryOf = (card: Card): boolean => {
    return card.deadlocks === Deadlocks.Primary
  }
  export const onSecondaryOf = (card: Card): boolean => {
    return card.deadlocks === Deadlocks.Secondary
  }
}

export default Deadlocks;
