import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

new Vue ({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        Swiper, SwiperSlide
    },
    data() {
        return {
            reviews: [],
            sliderOptions: {
                breakpoints: {
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30 
                  }
                }
            }
        }
    },
    methods: {
        requaireImagesToArray(data) {
            return data.map((item) => {
                const requiredImage = require(`../images/content/${item.pic}`).default;
                    item.pic = requiredImage;
                    return item;
            });
        },
        slide(direction) {
            const slider = this.$refs["slider"].$swiper;
            switch(direction) {
                case "next" :
                slider.slideNext()
                break;
            case "prev" :
                slider.slidePrev()
                break;
            }
        }
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.requaireImagesToArray(data);
    }
});