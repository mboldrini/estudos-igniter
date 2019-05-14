<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="icon" href="favicon.ico">
		<title>Lattes - Onepage Multipurpose Bootstrap HTML</title>
		<link href="<?php echo base_url(); ?>public/css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<link href="<?php echo base_url(); ?>public/css/owl.carousel.css" rel="stylesheet">
		<link href="<?php echo base_url(); ?>public/css/owl.theme.default.min.css"  rel="stylesheet">
		<link href="<?php echo base_url(); ?>public/css/style.css" rel="stylesheet">
		<script src="<?php echo base_url(); ?>public/js/ie-emulation-modes-warning.js"></script>
		
<?php
	if( isset($styles) ){
		foreach( $styles as $style_name ){
			$href = base_url() . "public/css/" . $style_name; ?>
			<link href="<?= $href ?>" rel="stylesheet">
	<?php		
		}
	} ?>


	</head>
	<body id="page-top">
		<!-- Navigation -->
		<nav class="navbar navbar-default navbar-shrink navbar-fixed-top">
			<div class="container">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header page-scroll">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand page-scroll" href="#page-top"><img src="<?php echo base_url(); ?>public/images/logo.png" alt="Lattes theme logo"></a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li class="hidden">
							<a href="#page-top"></a>
						</li>
						<li>
							<a class="page-scroll" href="<?php base_url(); ?>#about">About</a>
						</li>
						<li>
							<a class="page-scroll" href="<?php base_url(); ?>#portfolio">Portfolio</a>
						</li>
						<li>
							<a class="page-scroll" href="<?php base_url(); ?>#team">Team</a>
						</li>
						<li>
							<a class="page-scroll" href="<?php base_url(); ?>#contact">Contact</a>
						</li>
						<li>
							<a class="page-scroll" href="<?php base_url(); ?>restrict">Login</a>
						</li>
					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>
