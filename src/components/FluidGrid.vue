<template>
    <div class="part group fluid-grid">
        <div class="col span_1_of_3">
            <slot name="col-1"></slot>
        </div>
        <div class="col span_1_of_3">
            <slot name="col-2"></slot>
        </div>
        <div class="col span_1_of_3">
            <slot name="col-3"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.fluid-grid img {
    width: 100%
}

.group {
    display: flex;
    flex-wrap: wrap;
}
/*  PARTS  */
.part {
	clear: both;
	padding: 0px;
	margin: 0px;
}

/*  COLUMN SETUP  */
.col {
    flex-basis: 20%;
    flex-grow: 1;
	display: block;
	float:left;
	margin: 1% 0 1% 1.6%;
}
.col:first-child { margin-left: 0; }

/*  GROUPING  */
.group:before,
.group:after { content:""; display:table; }
.group:after { clear:both;}
.group { zoom:1; /* For IE 6/7 */ }

/*  GRID OF THREE  */
.span_3_of_3 { width: 100%; }
.span_2_of_3 { width: 66.13%; }
.span_1_of_3 { width: 32.26%; }

/*  GO FULL WIDTH BELOW 480 PIXELS */
@media only screen and (max-width: 480px) {
	.col {  margin: 1% 0 1% 0%; }
	.span_3_of_3, .span_2_of_3, .span_1_of_3 { width: 100%; }
}
</style>
