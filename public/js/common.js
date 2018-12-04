/**
 * Created by lzz on 2018/12/2.
 */


smarty.register_modifier( 'image_address', function( val ) {
    return window.domain + "/package/pack/smallsix_smurf7/" + val;
} );

