<template>
	<div class="center">
		<div class="col-sm-4 box">
			<div class="col-sm-3 box2">
				<div class="col-sm-2 box3">
					<div class="col-sm-1 box4">
						<router-link to="main" class="btn btn-danger">Back To Main</router-link>						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
body
{
	margin:0;
	padding:100px;
	background-color: #000;
}	
.main
{
	margin: auto;
	padding: 0;
	width: 90%;
}
.box
{
	margin: 0;
	padding: 50px;
	height: 400px;
	width: 400px;
	background:-webkit-linear-gradient(#ffff00 50% , #000 50%);
	border-radius: 200px;
	animation-name:pawan;
	animation-duration:2s;
	animation-iteration-count:infinite;
	animation-timing-function:linear;
}
@keyframes pawan
{
	from {-webkit-transform:rotate(0deg);}
	to {-webkit-transform:rotate(360deg);}
}
.box2
{
	margin: 0;
	padding: 50px;
	height: 300px;
	width: 300px;
	background:-webkit-linear-gradient(#000 50% , #ff0000 50%);
	border-radius: 200px;
	animation-name:paw;
	animation-duration:2s;
	animation-delay:5s;
	animation-iteration-count:infinite;
	animation-timing-function:linear;
}
@keyframes paw
{
	from {-webkit-transform:rotateX(0deg);}
	to {-webkit-transform:rotateX(360deg);}
}

.box3
{
	margin: 0;
	padding: 50px;
	height: 200px;
	width: 200px;
	background:-webkit-linear-gradient(#ffff00 50% , #000 50%);
	border-radius: 200px;
	animation-name:pankaj;
	animation-duration:2s;
	animation-iteration-count:infinite;
	animation-timing-function:linear;
}
@keyframes pankaj
{
	from {-webkit-transform:rotate(0deg);}
	to {-webkit-transform:rotate(360deg);}
}

.box4
{
	margin: 0;
	padding: 0;
	height: 100px;
	width: 100px;
	background:-webkit-linear-gradient(#000 50% , #ff0000 50%);
	border-radius: 200px;
	animation-name:pooja;
	animation-duration:2s;
	animation-delay:3s;
	animation-iteration-count:infinite;
	animation-timing-function:linear;
}
@keyframes pooja
{
	from {-webkit-transform:rotateX(0deg);}
	to {-webkit-transform:rotateX(360deg);}
}
</style>
