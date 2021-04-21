<?php
/**
  * Template Name: Big Hero
  */

get_header();
$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
if(!$url){
	$url = get_site_url() . "/wp-content/themes/uw-2014/assets/headers/suzzallo.jpg";
}
$mobileimagesrc = get_post_meta($post->ID, "mobileimage");
$hasmobileimage = '';
if( !empty($mobileimagesrc) && $mobileimagesrc[0] !== "") {
	$mobileimage = $mobileimagesrc[0];
	$hasmobileimage = 'hero-mobile-image';
}
$sidebar = get_post_meta($post->ID, "sidebar");
$banner = get_post_meta($post->ID, "banner");
$buttontext = get_post_meta($post->ID, "buttontext");
$buttonlink = get_post_meta($post->ID, "buttonlink");


$sidebar = get_post_meta( $post->ID, 'sidebar' );
?>


<div class="uw-hero-image hero-height <?php echo $hasmobileimage ?>" style="background-image: url(<?php echo $url ?>);">
    <?php if( isset($mobileimage)) { ?>
      <div class="mobile-image" style="background-image: url(<?php echo $mobileimage ?>);"></div>
    <?php } ?>
    <div id="hero-bg">
      <div id="hero-container" class="container">
      <?php if(!empty($banner) && $banner[0]){ ?>
        <div id="hashtag"><span><span><?php echo $banner[0] ? $banner[0] : ''; ?></span></span></div>
      <?php } ?>
        <h1 class="uw-site-title"><?php the_title(); ?></h1>
        <span class="udub-slant"><span></span></span>
      <?php if(!empty($buttontext) && $buttontext[0]){ ?>
        <a class="uw-btn btn-sm btn-none" href="<?php echo $buttonlink[0] ? $buttonlink[0] : ''; ?>"><?php echo $buttontext[0] ? $buttontext[0] : ''; ?></a>
      <?php } ?>
      </div>
    </div>
</div>

<div class="container-fluid uw-body">
	<div class="row">

		<main id="primary" class="site-main uw-body-copy col-md-<?php echo ( ( ! isset( $sidebar[0] ) || 'on' !== $sidebar[0] ) ? '8' : '12' ); ?>"

      <?php
      uw_site_title();
      get_template_part( 'template-parts/menu', 'mobile' );
      get_template_part( 'template-parts/breadcrumbs' );



          // Start the Loop.
          while ( have_posts() ) : the_post();


            /*
             * Include the post format-specific template for the content. If you want to
             * use this in a child theme, then include a file called called content-___.php
             * (where ___ is the post format) and that will be used instead.
             */

           //the_content();
            get_template_part( 'template-parts/content', 'page-noheader' );


            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) {
              comments_template();
            }

          endwhile;

        ?>




      </div>

    </div>




    <?php
    if ( ! isset( $sidebar[0] ) || 'on' !== $sidebar[0] ) {
    	get_sidebar();
    }
    ?>

</div><!-- .row -->
</div><!-- .container -->

<?php
get_footer();
