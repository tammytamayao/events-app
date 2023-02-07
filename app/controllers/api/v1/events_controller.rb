class Api::V1::EventsController < ApplicationController
  def index
    events = Event.all.order(created_at: :desc)
    render json: events
  end

  def create
    @event = Event.create!(event_params)
    if @event
      render json: @event
    else
      render json: @event.errors
    end
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render json: { message: 'Event updated!' }
    else
      render json: @event.errors
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event&.destroy
    render json: { message: 'Event deleted!' }
  end

  private

  def set_event
    
  end

  def event_params
    params.require(:event).permit(:name, :event_time)
  end

end
