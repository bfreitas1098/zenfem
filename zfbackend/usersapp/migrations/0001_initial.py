# Generated by Django 4.2.6 on 2023-10-22 15:13

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("username", models.CharField(max_length=80)),
                ("bio", models.CharField(blank=True, max_length=120, null=True)),
                ("interests", models.CharField(max_length=120)),
                ("bday", models.DateField()),
            ],
        ),
    ]
