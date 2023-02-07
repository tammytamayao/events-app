class Event < ApplicationRecord
    validates :name, presence: true
    validates :name, uniqueness: true
    validates :event_time, presence: true
    validates :event_time, uniqueness: true
end
