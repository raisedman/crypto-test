<?php
/**
 * Plugin Name:       Crypto Ticker
 * Description:       An interactive block with the Interactivity API.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Aleksandr Kuznichenko
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function create_block_crypto_ticker_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_crypto_ticker_block_init' );

//rendered on hook
add_action( 'wp_footer', function() {
	echo render_block( [
			'blockName' => 'create-block/crypto-ticker',
	] );
} );
