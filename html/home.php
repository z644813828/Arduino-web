<div class="w-100">
	<div class="d-flex bg-dark rounded rounded-lg p-2 align-items-center justify-content-center">
		<!-- <div class="container" style="margin-left: 0px">
		    <input class="range vertical-lowest-first round" type="range" min="0" max="100" step="1" value="45">
		</div> -->
		<div class="row w-100 p-0">
			<div class="col-3 p-1">
				<?php for ($i = 1; $i <= 3; $i++) :?>
					<button class="my-2 button-deck w-100 btn btn-danger text-muted">M<?php echo $i;?></button>
				<?php endfor; ?>
			</div>
			<div class="col-3 p-1">
				<?php $data = array(
                    "DISCORD" => "fa-brands fa-discord",
                    "TWITCH"  => "fa-brands fa-twitch",
                    "STEAM"   => "fa-brands fa-steam");
				foreach ($data as $key => $value) : ?>
				<button class="my-2 button-deck w-100 btn btn-danger" value="<?php echo $key; ?>">
					<i class="fa-solid fa-lg <?php echo $value; ?>"></i>
				</button>
				<?php endforeach; ?>
			</div>
			<div class="col-3 p-1">
				<?php $data = array(
				    "GAMEPAD" 		=>" fa-gamepad",
				    "VOLUME" 		=>" fa-volume-xmark",
				    "MICROPHONE" 	=>" fa-microphone-slash");
				foreach ($data as $key => $value) : ?>
				<button class="my-2 button-deck w-100 btn btn-danger" value="<?php echo $key; ?>">
					<i class="fa-solid fa-lg <?php echo $value; ?>"></i>
				</button>
				<?php endforeach; ?>
			</div>
			<div class="col-3 p-1">
				<?php for ($i = 1; $i <= 3; $i++) :?>
					<button class="my-2 button-deck w-100 btn btn-danger text-danger">G<?php echo $i;?></button>
				<?php endfor; ?>
			</div>
		</div>
	</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.2/rangeslider.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.2/rangeslider.min.css" rel="stylesheet" />


<div class="w-100 my-4">
	<div class="stuff">
		<div id="flat-slider"></div>
		<div id="flat-slider-vertical-1"></div>
		<div id="flat-slider-vertical-2"></div>
		<div id="flat-slider-vertical-3"></div>
	</div>
</div>
