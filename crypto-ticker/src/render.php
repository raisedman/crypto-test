<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context( array( 'isOpen' => false, 'price' => 'Loading...' ) ); ?>
	data-wp-context='{"price":"loading...", "id": "bitcoin"}'
	data-wp-init="actions.fetchPrice"
>
  <span class="currency">Bitcoin:</span> <span data-wp-text="context.price"></span> USD
</div>
