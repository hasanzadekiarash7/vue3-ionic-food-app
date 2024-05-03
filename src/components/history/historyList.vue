<template>
    <ion-list class="historyList">
        <ion-item lines="none" v-for="item in 7" class="mt-3">
            <ion-avatar slot="start" class="historyList-image">
                <img src="../../Assets/images/Food.jpg" />
            </ion-avatar>
            <div class="historyList-contentWrapper">
                <ion-label class="historyList-contentWrapper-title">vegetable fish food</ion-label>
                <ion-label class="historyList-contentWrapper-subtitle"> <ion-icon :icon="time"></ion-icon>15 minutes
                    time</ion-label>
                <ion-label class="historyList-contentWrapper-price">$20.50</ion-label>
            </div>
        </ion-item>
    </ion-list>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonItemGroup, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { paperPlane, paperPlaneSharp, time } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
@import url('../../Assets/interface/historyList.scss');
</style>