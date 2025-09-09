import { store, getContext } from '@wordpress/interactivity';

store( 'create-block', {
	actions: {
		async fetchPrice() {
			const context = getContext();

      async function updatePrice() {
        try {
          const res = await fetch(`http://localhost:3000/price/bitcoin`);
          const data = await res.json();
          context.price = data.price;
        } catch (e) {
          context.price = "error";
        }
      }

      await updatePrice();
      setInterval(updatePrice, 60000); 
    }
	},
} );