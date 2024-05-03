<template>
    <ion-page>
        <ion-content class="ion-padding">
            <div class="login-container">
                <ion-label class="login-container-title">login</ion-label>
                <ion-text class="login-container-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint officia, alias repudiandae eaque
                    adipisci
                </ion-text>
                <ion-select v-model="select" class="login-container-select ion-justify-content-center" fill="solid"
                    interface="action-sheet" placeholder="selectCountry">
                    <ion-select-option value="peperoni">iran</ion-select-option>
                    <ion-select-option value="hawaii">usa</ion-select-option>
                </ion-select>
                <ion-input v-model="tel" class="login-container-tel" fill="solid" type="tel" :maxlength="12" counter
                    color="primary"></ion-input>
                <ion-button href="/login/verify" class="login-container-submit" :disabled="isDisabled" expand="full"
                    color="primary" shape="round">
                    submit
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSelect, IonInput, IonSelectOption, IonSkeletonText } from '@ionic/vue';
import { paperPlane, locationOutline, notifications, basket, ticket, add, settings, language, information, search, sparkles } from 'ionicons/icons';
import { ref, watch } from 'vue';
const isDisabled = ref(true)
const tel = ref()
const select = ref()
watch(() => tel.value && select.value, () => {
    if (tel.value != '' && select.value != '') {
        isDisabled.value = false
    } else {
        isDisabled.value = true
    }
})
</script>

<style lang="scss" scoped>
@import url('../Assets/interface/login.scss');
</style>