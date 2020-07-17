<?php

$info = array(
  // Available colors and color labels used in theme.
  'fields' => array(
    'header' => t('Header background'),
//    'base' => t('Site name background'),
//    'slogan' => t('Slogan background'),
//    'titleslogan' => t('Site name and slogan'),
    'bg' => t('Main background'),
    'footer' => t('Footer background'),
    'text' => t('Text color'),
//    'link' => t('Link color'),
//    'hovermenu' => t('Main menu hover background'),
//    'primarytabs' => t('Primary Tabs background'),
    'borders' => t('Borders'),
    'formfocusborder' => t('Form element borders when selected'),
//    'buttons' => t('Buttons and Breadcrumb'),
  ),
  // Pre-defined color schemes.
  'schemes' => array(
    'default' => array(
      'title' => t('Palante (default)'),
      'colors' => array(
        'header' => '#006C92',
 //       'base' => '#20252e',
 //       'slogan' => '#ffffff',
 //       'titleslogan' => '#ffffff',
        'bg' => '#fffffe',
        'footer' => '#2e2e2e',
        'text' => '#000001',
//        'link' => '#006C92',
//        'hovermenu' => '#20252e',
//       'primarytabs' => '#586172',
        'borders' => '#bbbbbb',
        'formfocusborder' => '#43afe4',
//        'buttons' => '#006C92',
      ),
    ),
  ),

  'blend_target' => '#ffffff',

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => array(
    'css/palante_theme.css',
  ),
);
