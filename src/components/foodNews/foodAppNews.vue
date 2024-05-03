<template>
    <ion-content>
        <h4>best card</h4>
        <detail-card :items="cardItems" />
        <recent-list />
    </ion-content>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { arrowBack, arrowForward } from 'ionicons/icons';
import DetailCard from './detailCard.vue';
import { ref } from 'vue';
import RecentList from './recentList.vue';
const cardItems = ref(
    [
        {
            title: 'i am good title',
            subtitle: 'i am subtitle'
        },
    ]
)
</script>

<style lang="scss" scoped></style>