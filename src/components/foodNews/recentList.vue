<template>
    <ion-list class="recent-list">
        <ion-list-header>
            <ion-label class="recent-list-header">New This Week</ion-label>
        </ion-list-header>
        <ion-item v-for="item in 5" inset class="full-width recent-list-item" lines="none" style="border: none;">
            <ion-avatar slot="start" class="recent-list-item-image">
                <img src="../../Assets/images/images.jpg" />
            </ion-avatar>
            <div class="recent-list-item-contentWrapper">
                <ion-label class="recent-list-item-title">Item title</ion-label>
                <ion-text class="recent-list-item-subtitle">item subtitle</ion-text>
            </div>
        </ion-item>
    </ion-list>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { arrowBack, arrowForward } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
@import url('../../Assets/interface/recentList.scss');
</style>