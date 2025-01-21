<?php

namespace App\Notifications;

use App\Models\Goal;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class GoalRemiderNotification extends Notification
{
    use Queueable;
    private $goal;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Goal $goal)
    {
        $this->goal = $goal;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('MediaService - задачи')
                    ->line('У вас запланировано мероприятие: ' . $this->goal->text)
                    ->line("Дата: " . Carbon::parse($this->goal->start_date)->format('d.m.Y в H:i'))
                    ->action('Перейти в календарь', 'https://crm-mediaservice.ru/calendar');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
