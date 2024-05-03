<template>
    <div class="detail-card-wrapper" v-for="item in items">
        <ion-card class="detail-card">
            <div class="detail-card-imageWrapper">
                <img src="../../Assets/images/Food.jpg" alt="">
            </div>
            <div class="detail-card-contentWrapper">
                <div>
                    <ion-card-title class="detail-card-contentWrapper-title">{{ item?.title }}</ion-card-title>
                    <ion-card-subtitle class="detail-card-contentWrapper-subtitle">{{ item?.subtitle
                        }}</ion-card-subtitle>
                    <div>
                        <ion-icon :icon="star" color="warning" v-for="item in 5"></ion-icon>
                    </div>
                </div>
                <div class="detail-card-buttonWrapper">
                    <ion-button expand="block">
                        go
                    </ion-button>
                </div>
            </div>
        </ion-card>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { arrowBack, arrowForward, star } from 'ionicons/icons';
interface detailCardProps {
    items?: Array<Object>
}
defineProps<detailCardProps>()
</script>

<style lang="scss" scoped>
@import url('../../Assets/interface/detailCard.scss');
</style>