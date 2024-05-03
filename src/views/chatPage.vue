<template>
    <ion-page>
        <div>
            <ion-item lines="none">
                <ion-input type="text" placeholder="find restaurant" fill="outline">
                    <div slot="start">
                        <ion-icon :icon="search"></ion-icon>
                    </div>
                    <div slot="end">
                        <ion-icon :icon="mic"></ion-icon>
                    </div>
                </ion-input>
            </ion-item>
        </div>
        <div class="ion-padding">
            <detail-card :items="cardItems" />
        </div>
        <div>
            <chat />
        </div>
    </ion-page>
</template>

<script setup>
import DetailCard from '@/components/foodNews/detailCard.vue';
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput } from '@ionic/vue';
import { paperPlane, locationOutline, notifications, basket, ticket, add, settings, language, information, search, sparkles, mic } from 'ionicons/icons';
import { ref } from 'vue';
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