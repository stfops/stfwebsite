<?php
/**
 * Template Name: No Sidebar
 */
?>

<?php get_header(); ?>

<?php get_template_part( 'header', 'image' ); ?>

<div class="container-fluid uw-body">

  <div class="row">

    <div class="col-md-12 uw-content" role='main'>

      <?php uw_site_title(); ?>
      <?php get_template_part( 'menu', 'mobile' ); ?>
      <?php get_template_part( 'breadcrumbs' ); ?>

      <div id='main_content' class="uw-body-copy" tabindex="-1">

        <?php
          // Start the Loop.
          while ( have_posts() ) : the_post();

            /*
             * Include the post format-specific template for the content. If you want to
             * use this in a child theme, then include a file called called content-___.php
             * (where ___ is the post format) and that will be used instead.
             */
            get_template_part( 'content', 'page' );

          endwhile;
        ?>

      </div>

    </div>

  </div>

</div>

<?php get_footer(); ?>
