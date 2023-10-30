/** Shopify CDN: Minification failed

Line 12:1 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 14:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 18:3 Transforming const to the configured target environment ("es5") is not supported yet
Line 34:5 Transforming const to the configured target environment ("es5") is not supported yet
Line 48:5 Transforming const to the configured target environment ("es5") is not supported yet

**/
if ( typeof ProductQuantity !== 'function' ) {

	class ProductQuantity extends HTMLElement {

		constructor(){

			super();

			const qty = this.querySelector('.qty-selector'),
						qtyMinus = this.querySelector('.qty-minus'),
						qtyPlus = this.querySelector('.qty-plus'),
						qtyMin = qty.getAttribute('min') ? parseInt(qty.getAttribute('min')) : 1,
						qtyMax = qty.getAttribute('max') ? parseInt(qty.getAttribute('max')) : 999;

			if ( parseInt(qty.value) - 1 < qtyMin ) {
				qtyMinus.classList.add('disabled');
			}
			if ( parseInt(qty.value) + 1 > qtyMax ) {
				qtyPlus.classList.add('disabled');
			}

			qtyMinus.addEventListener('click', (e)=>{
				e.preventDefault();
				if ( ! qtyMinus.classList.contains('disabled') ) {
					const currentQty = parseInt(qty.value);
					if ( currentQty - 1 >= qtyMin ) {
						qty.value = currentQty - 1;
						qtyPlus.classList.remove('disabled');
					} 
					if ( currentQty - 1 <= qtyMin ) {
						qtyMinus.classList.add('disabled');
					}
				}
			});

			qtyPlus.addEventListener('click', (e)=>{
				e.preventDefault();
				if ( ! qtyPlus.classList.contains('disabled') ) {
					const currentQty = parseInt(qty.value);
					if ( currentQty + 1 <= qtyMax ) {
						qty.value = currentQty + 1;
						qtyMinus.classList.remove('disabled');
					} 
					if ( currentQty + 1 >= qtyMax ) {
						qtyPlus.classList.add('disabled');
					}
				}
			});

		}
		
	}


  if ( typeof customElements.get('product-quantity') == 'undefined' ) {
    customElements.define('product-quantity', ProductQuantity);
	}

}