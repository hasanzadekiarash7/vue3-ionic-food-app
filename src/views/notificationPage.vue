<template>
    <ion-page>
        <notification />
        <Vue3Lottie :animationData="foodDelivery" :height="200" :width="200" />
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { paperPlane, locationOutline, notifications, basket, ticket, add, settings, language, information, search, sparkles } from 'ionicons/icons';
import foodDelivery from "../Assets/images/Animation - 1714665844829.json";
import { Vue3Lottie } from 'vue3-lottie';
import Notification from '@/components/notification.vue';
</script>

<style lang="scss" scoped></style>