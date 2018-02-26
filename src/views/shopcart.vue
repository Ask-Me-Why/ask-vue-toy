<style lang="scss">
.line-test{
	line{
		stroke: #000;
		stroke-width: 2;
	}
}
.loader-box-t{
	width: 100%;
}
</style>
<template>
	<div class="ask-view" v-nav="$route.meta">
		<div class="ask-view-box">
			<div class="loader-box-t">

				<svg viewBox="0 0 100 100">
					<defs>
					    <radialGradient id="rg" r=".9"> 
					      <stop offset="0%" stop-color="#f00"></stop>
					      <stop offset="10%" stop-color="#000"></stop>
					      <stop offset="20%" stop-color="#f00"></stop>
					      <stop offset="30%" stop-color="#000"></stop>
					      <stop offset="40%" stop-color="#f00"></stop>
					      <stop offset="50%" stop-color="#000"></stop>
					      <stop offset="60%" stop-color="#f00"></stop>
					      <stop offset="70%" stop-color="#000"></stop>
					      <stop offset="80%" stop-color="#f00"></stop>
					      <stop offset="90%" stop-color="#000"></stop> 
					      <stop offset="100%" stop-color="#f00"></stop>
					    </radialGradient>                        
					    <rect id="witness" width="256" height="192" fill="url(#rg)"></rect>

					     <filter id="filter-ripple">
					          <feImage result="pict2" xlink:href="#witness" x="0" y="0" width="256" height="192"></feImage>
					          <feDisplacementMap scale="10" xChannelSelector="R" yChannelSelector="R" in2="pict2" in="SourceGraphic">
					       </feDisplacementMap>
					    </filter>    
					  </defs>
					<path d="M10 50 C10 40 90 40 90 50 C90 60 10 60 10 50" fill="none" stroke="#64b5f6" stroke-width="1%" filter="url(#filter-ripple)"/>
				</svg>
				<svg viewBox="0 0 80 80">
					<defs>
						<path d="M0 0 A30 30 0 0 0 0 60 A30 30 0 0 0 0 0" stroke-width="1%" stroke="#000" fill="none" transform="translate(40,10)"/>
					</defs>
					<g transform="translate(40,10)">
						<template v-for="i in 10">
							<circle cx="0" cy="0" r="5" fill="#1abc9c" stroke="none" :style="{opacity: .8*(1-i/10)}" >
								<animateMotion 
									repeatCount="indefinite"
									path="M0 0 A30 30 0 0 0 0 60 A30 30 0 0 0 0 0" 
									rotate="auto"
									keyPoints="0;.6;1;1"
									keyTimes="0;.28;.5;1"
									calcMode="linear"  
									dur="3s"
									:begin="i*.15+'s'"
								/>
								<animate
									attributeName="fill"
									attributeType="XML"
									values="#e67e22;#1abc9c;#1abc9c"
									keyTimes="0;.5;1"
									calcMode="linear"
									repeatCount="indefinite"
									dur="3s"
									:begin="i*.15+'s'"
								/>
							</circle>
						</template>
					</g>
				</svg>
			</div>
			<!-- <svg id="svgTest" width="300" height="500">
				<defs>
					<clipPath id="kid_hair_defs_clip">
					    <rect x="101" y="46" width="98" height="52"/>
				    </clipPath>

				    <polygon id="kid_ear_defs_polygon"
				    	points="0 24,18 24,9 0" 
				    	fill="#F3F3F3" stroke="#183E5D" stroke-width="4" stroke-linejoin="round"/>
				</defs>
				<g id="kid_head">
					<rect calss="kh_face"
						x="110" y="80" 
						width="80" height="70" 
						rx="15" ry="15" 
						fill="#F3F3F3" stroke="#183E5D" stroke-width="4"/>
					<ellipse calss="kh_hair"
						rx="46" ry="52" 
						cx="150" cy="100" 
						fill="#FCDC58" stroke="#183E5D" stroke-width="4" 
						clip-path="url(#kid_hair_defs_clip)"/>
					<polyline 
						points="102 99,133 99,139 92,145 99,155 99,161 92, 167 99,198 99" 
						fill="none" stroke="#183E5D" stroke-width="4" stroke-linejoin="round"/>
					<use xlink:href="#kid_ear_defs_polygon" 
						transform="rotate(-40 110,74)"
						x="110" y="50"/>
					<use xlink:href="#kid_ear_defs_polygon" 
						transform="rotate(40 190,74)"
						x="172" y="50"/>
					<g class="kh_eyes">
						<path d="M120 114,C120 106,130 106,130 114" fill="none" stroke="#183E5D" stroke-width="2"/>
						<path d="M170 114,C170 106,180 106,180 114" fill="none" stroke="#183E5D" stroke-width="2"/>
					</g>
					<g class="kh_cheeks">
						<circle r="6" cx="125" cy="126" fill="#FF6E37"/>
						<circle r="6" cx="175" cy="126" fill="#FF6E37"/>
					</g>
					<g class="kh_mouth">
						<path d="M140 120,C138 114,162 114,160 120" fill="#183E5D"/>
						<path d="M140 120,C148 130,152 130,160 120" fill="#183E5D"/>

						<path d="M136 130,C138 138,150 138,150 130" fill="none" stroke="#183E5D" stroke-width="2"/>
						<path d="M150 130,C152 138,164 138,164 130" fill="none" stroke="#183E5D" stroke-width="2"/>
					</g>
				</g>

				<circle r="2" cx="150" cy="150" fill="red"/>
			</svg> -->
			<!-- <svg width="200px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">
			    <text class="liquidFillGaugeText" text-anchor="middle" font-size="42px" transform="translate(100,120)" style="fill: #000">50.0%</text>
			    <g id="wave">
			        <path id="wave-2" fill="rgba(154, 205, 50, .8)" d="M 0 100 C 133.633 85.12 51.54 116.327 200 100 A 95 95 0 0 1 0 100 Z">
			        <animate dur="5s" repeatCount="indefinite" attributeName="d" attributeType="XML" values="
			        							M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z;
			                                    M0 100 C145 100, 41 100, 200 100 A95 95 0 0 1 0 100 Z;
			                                    M0 100 C90 28, 92 179, 200 100 A95 95 0 0 1 0 100 Z"></animate>
			        </path>
			    </g>
			    <circle cx="100" cy="100" r="80" stroke-width="10" stroke="white" fill="transparent"></circle>
			    <circle cx="100" cy="100" r="90" stroke-width="20" stroke="yellowgreen" fill="none" class="percentage-pie-svg"></circle>
				<circle r="2" cx="10" cy="100" fill="red"/>
			</svg> -->
			<!-- <svg width="325px" height="325px" version="1.1" xmlns="http://www.w3.org/2000/svg">
			  <path d="M80 80
			           A 45 45, 0, 0, 0, 125 125
			           L 125 80 Z" fill="green"/>
			  <path d="M230 80
			           A 45 45, 0, 1, 0, 275 125
			           L 275 80 Z" fill="red"/>
			  <path d="M80 230
			           A 45 45, 0, 0, 1, 125 275
			           L 125 230 Z" fill="purple"/>
			  <path d="M230 230
			           A 45 45, 0, 1, 1, 275 275
			           L 275 230 Z" fill="blue"/>
			</svg>
			<svg class="line-test" width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
			    <line stroke-dasharray="5, 5"              x1="10" y1="10" x2="190" y2="10" />
			    <line stroke-dasharray="5, 10"             x1="10" y1="30" x2="190" y2="30" />
			    <line stroke-dasharray="10, 5"             x1="10" y1="50" x2="190" y2="50" />
			    <line stroke-dasharray="5, 1"              x1="10" y1="70" x2="190" y2="70" />
			    <line stroke-dasharray="1, 5"              x1="10" y1="90" x2="190" y2="90" />
			    <line stroke-dasharray="0.9"               x1="10" y1="110" x2="190" y2="110" />
			    <line stroke-dasharray="15, 10, 5"         x1="10" y1="130" x2="190" y2="130" />
			    <line stroke-dasharray="15, 10, 5, 10"     x1="10" y1="150" x2="190" y2="150" />
			    <line stroke-dasharray="15, 10, 5, 10, 15" x1="10" y1="170" x2="190" y2="170" />
			    <line stroke-dasharray="5, 5, 1, 5"        x1="10" y1="190" x2="190" y2="190" />
			</svg> -->
		</div>
	</div>
</template>
<script>
export default {
	name: "Notes",
	computed: {
		notes() {
			return this.$store.getters.allNotes;
		}
	},
	created() {
		if (this.notes.length == 0) {
			this.$store.dispatch('allNotes');
		}
		console.log(this.notes)
	}
}

</script>
