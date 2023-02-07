class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name, null: false, uniqueness:true
      t.datetime :event_time, null: false, uniqueness:true

      t.timestamps
    end
  end
end
