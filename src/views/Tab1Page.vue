<template>
  <ion-page class="ion-padding">
    <ion-icon style="margin-left: 10px; font-size: 40px;" :icon="clickBack ? arrowForward : arrowBack"
      @click="clickBack = !clickBack"></ion-icon>
    <ExploreContainer v-if="!clickBack" />
    <food-app-news v-else />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { arrowBack, arrowForward } from 'ionicons/icons';
import { ref } from 'vue';
import FoodAppNews from '@/components/foodNews/foodAppNews.vue';
const clickBack = ref(false)
</script>
