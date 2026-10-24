export interface LocalizedPprContent {
  headerTag: string;
  headerTitle: string;
  steps: {
    num: string;
    title: string;
    desc: string;
  }[];
  mapTargeted: string;
  mapExcluded: string;
  mapConfirmedEstimate: string;
  surveyQuestion: string;
  surveyAnswerOptions: string[];
  calendarSlot: string;
  smsNotification: string;
}

export const PPR_TRANSLATIONS: Record<'en' | 'sv' | 'es' | 'de', LocalizedPprContent> = {
  en: {
    headerTag: 'HOW IT WORKS',
    headerTitle: 'From ad to booked sit.',
    steps: [
      {
        num: '01',
        title: 'Target',
        desc: 'Only high-income ZIP codes.'
      },
      {
        num: '02',
        title: 'Ad',
        desc: 'Video that stops the scroll.'
      },
      {
        num: '03',
        title: 'Copy',
        desc: 'Direct response, no fluff.'
      },
      {
        num: '04',
        title: 'Qualify',
        desc: 'Renters and DIYers filtered out.'
      },
      {
        num: '05',
        title: 'Book',
        desc: 'Homeowners pick a slot on your route.'
      },
      {
        num: '06',
        title: 'Remind',
        desc: 'SMS reminders so 94.6% show up.'
      }
    ],
    mapTargeted: 'Targeted ($90k+ Income)',
    mapExcluded: 'Filtered Out (Low Income)',
    mapConfirmedEstimate: 'CONFIRMED ESTIMATE',
    surveyQuestion: 'Are you the verified homeowner?',
    surveyAnswerOptions: ['Yes, Sole Owner', 'Yes, Joint Owner', 'Renting / Tenant'],
    calendarSlot: 'Route Slot Confirmed',
    smsNotification: 'Reminder sent: Estimator arriving at 2:00 PM.'
  },

  sv: {
    headerTag: 'HUR DET FUNGERAR',
    headerTitle: 'Från annons till bokat möte.',
    steps: [
      {
        num: '01',
        title: 'Målgrupp',
        desc: 'Endast postnummer med hög köpkraft.'
      },
      {
        num: '02',
        title: 'Annons',
        desc: 'Video som fångar uppmärksamheten.'
      },
      {
        num: '03',
        title: 'Copy',
        desc: 'Direkt respons, inget fluff.'
      },
      {
        num: '04',
        title: 'Kvalificera',
        desc: 'Hyresgäster och gör-det-självare filtreras bort.'
      },
      {
        num: '05',
        title: 'Boka',
        desc: 'Husägare väljer en tid i din rutt.'
      },
      {
        num: '06',
        title: 'Påminnelse',
        desc: 'SMS-påminnelser så 94,6% faktiskt kommer.'
      }
    ],
    mapTargeted: 'Målgrupp (Hög inkomst & köpkraft)',
    mapExcluded: 'Bortfiltrerad (Låg inkomst)',
    mapConfirmedEstimate: 'BEKRÄFTAT OFFERTBESÖK',
    surveyQuestion: 'Äger du fastigheten/villan?',
    surveyAnswerOptions: ['Ja, ensam ägare', 'Ja, delägare', 'Hyr bostaden'],
    calendarSlot: 'Rutttid bekräftad i kalender',
    smsNotification: 'Påminnelse skickad: Kalkylator anländer kl. 14:00.'
  },

  es: {
    headerTag: 'CÓMO FUNCIONA',
    headerTitle: 'Del anuncio a la visita agendada.',
    steps: [
      {
        num: '01',
        title: 'Segmentación',
        desc: 'Solo códigos postales de altos ingresos.'
      },
      {
        num: '02',
        title: 'Anuncio',
        desc: 'Vídeo que detiene el scroll.'
      },
      {
        num: '03',
        title: 'Copywriting',
        desc: 'Respuesta directa sin rodeos.'
      },
      {
        num: '04',
        title: 'Cualificación',
        desc: 'Inquilinos y curiosos filtrados.'
      },
      {
        num: '05',
        title: 'Reserva',
        desc: 'Los propietarios eligen un hueco en tu ruta.'
      },
      {
        num: '06',
        title: 'Recordatorio',
        desc: 'SMS automatizados para un 94,6% de asistencia.'
      }
    ],
    mapTargeted: 'Segmentado (Ingresos > 90k€)',
    mapExcluded: 'Excluido (Bajos ingresos)',
    mapConfirmedEstimate: 'PRESUPUESTO CONFIRMADO',
    surveyQuestion: '¿Eres el propietario de la vivienda?',
    surveyAnswerOptions: ['Sí, único propietario', 'Sí, copropietario', 'Alquiler / Inquilino'],
    calendarSlot: 'Hueco de ruta confirmado',
    smsNotification: 'Recordatorio enviado: El tasador llega a las 14:00.'
  },

  de: {
    headerTag: 'WIE ES FUNKTIONIERT',
    headerTitle: 'Von der Anzeige zum gebuchten Vor-Ort-Termin.',
    steps: [
      {
        num: '01',
        title: 'Zielgruppe',
        desc: 'Nur einkommensstarke Postleitzahlengebiete.'
      },
      {
        num: '02',
        title: 'Werbevideo',
        desc: 'Videos, die sofort die Aufmerksamkeit fesseln.'
      },
      {
        num: '03',
        title: 'Werbetext',
        desc: 'Direktes Angebot ohne Umschweife.'
      },
      {
        num: '04',
        title: 'Qualifizierung',
        desc: 'Mieter und Schnäppchenjäger herausgefiltert.'
      },
      {
        num: '05',
        title: 'Terminbuchung',
        desc: 'Eigentümer wählen ein freies Zeitfenster.'
      },
      {
        num: '06',
        title: 'Erinnerung',
        desc: 'Automatische SMS-Erinnerungen für 94,6% Termintreue.'
      }
    ],
    mapTargeted: 'Zielgebiet (Einkommen ab 90k€)',
    mapExcluded: 'Herausgefiltert (Geringes Einkommen)',
    mapConfirmedEstimate: 'BESTÄTIGTER BESICHTIGUNGSTERMIN',
    surveyQuestion: 'Sind Sie eingetragener Eigentümer?',
    surveyAnswerOptions: ['Ja, Alleineigentümer', 'Ja, Miteigentümer', 'Mietobjekt / Mieter'],
    calendarSlot: 'Routenfenster bestätigt',
    smsNotification: 'Erinnerung gesendet: Bauleiter trifft um 14:00 Uhr ein.'
  }
};
