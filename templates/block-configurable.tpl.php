<?php
/**
 * @file
 * Template for outputting the default block styling within a Layout.
 *
 * Variables available:
 * - $classes: Array of classes that should be displayed on the block's wrapper.
 * - $title: The title of the block.
 * - $title_prefix/$title_suffix: A prefix and suffix for the title tag. This
 *   is important to print out as administrative links to edit this block are
 *   printed in these variables.
 * - $content: The actual content of the block.
 */
?>
<div class="<?php print implode(' ', $classes);?>" <?php print backdrop_attributes($attributes); ?> data-animate-effect="fadeIn">
  <?php if (!empty($content_container)):?>
  <div class="container">
	<span class="icon">
	  <i></i>
    </span>
  <?php endif;?>
    <?php print render($title_prefix);?>
    <?php if ($title):?>
    <h3 class="block-title"><?php print $title;?></h3>
    <?php endif;?>
    <?php print render($title_suffix);?>
    <div class="block-content">
      <?php print render($content);?>
    </div>
  <?php if (!empty($content_container)):?>
  </div>
  <?php endif;?>
</div>
